$("#add_user").submit(function(event){
    alert("Data inserted")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    const unindexed_array = $(this).serializeArray();
    const data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data)

    const request = {
        "url": `http://localhost:8080/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("You have successfully updated your data")
    })
})

if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        const id = $(this).attr('data-id')

        const request = {
            "url": `http://localhost:8080/api/users/${id}`,
            "method": "DELETE",
        }

        if(confirm("are you sure you want to delete this record")){
            $.ajax(request).done(function(response){
                alert("You have successfully deleted your data")
                location.reload()
            })
        }
    })
}