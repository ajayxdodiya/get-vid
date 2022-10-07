$(document).ready(function(){
    var movies = [];
    $.ajax({
        url: `https://www.googleapis.com/drive/v2/files?q='1iu009ZrSCEu7-u9XV5U3NcfWoFIEzpUG'+in+parents&key=AIzaSyDUIf2k3Hy22eqYvFPoNEaqMsRKzp6NVL8`,
        success: function(response){
            var items = response.items;
            $(items).each(function(index, item){
            var name = item.title.split('.')[0]
            movies[name] = item.id
            })
            var urlParams = new URLSearchParams(window.location.search);
            var movieName = urlParams.get('m');
            if (movieName && movies[movieName]) {
            if(movies[movieName]) {
                window.location.href = 'https://drive.google.com/u/2/uc?id='+movies[movieName]+'&export=download'
            } else {
                // window.location.href = 'https://ajaydodiya.com'
            }
            } else {
            // window.location.href = 'https://ajaydodiya.com'
            }
        }
    });
})