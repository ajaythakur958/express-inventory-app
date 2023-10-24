function deleteProduct(id){
    const result = confirm("Are you sure you want to delete this product ?");
    // console.log(id);
    if(result){
        fetch("/delete-product/"+ id, {
            method: "POST"
        }).then(
            (res)=>{
                location.reload();
            }
        )
    }
}
