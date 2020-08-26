/**
 * External dependencies
 */
import { switchUserToAdmin } from '@wordpress/e2e-test-utils';

import { visitBlockPage } from '@woocommerce/blocks-test-utils';

const block = {
	name: 'Checkout',
	slug: 'woocommerce/checkout',
	class: '.wc-block-checkout',
};

if ( process.env.WP_VERSION < 5.3 || process.env.WOOCOMMERCE_BLOCKS_PHASE < 2 )
	// eslint-disable-next-line jest/no-focused-tests
	test.only( `skipping ${ block.name } tests`, () => {} );

describe( `${ block.name } Block`, () => {
	beforeAll( async () => {
		await switchUserToAdmin();
		await visitBlockPage( `${ block.name } Block` );
	} );

	it( 'renders without crashing', async () => {
		await expect( page ).toRenderBlock( block );
	} );
} );
