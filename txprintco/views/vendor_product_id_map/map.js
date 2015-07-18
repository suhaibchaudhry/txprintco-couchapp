function(doc) {
    if(doc.object_type === 'product') {
        emit(doc.vendor_product_id, {
				'doc_id': doc._id,
				'doc_rev': doc._rev,
				'parent_cat': doc.parent_cat,
				'subcat': doc.subcat,
				'title': doc.title,
				'url': doc.url,
				'base_price': doc.base_price,
				'runsizes': runsizes,
				'product_id': doc.product_id
		});
    }
}
