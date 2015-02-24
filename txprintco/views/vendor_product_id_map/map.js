function(doc) {
    if(doc.object_type === 'product') {
        emit(doc.vendor_product_id, doc.product_id);
    }
}
