var general_cache_object = {};



// setup all relevant functions and properties.
function inIt(){

    /*
    create_cache property.
    function that recieves 2 parameters.
    cache_name: name of wanted cache.
    ttl: wanted time to live of cache entries.
    max_entries: maximum entries wanted in your cache.
    */
    general_cache_object.create_cache = (cache_name, ttl, max_entries)=>{
        general_cache_object[`${cache_name}`].ttl = ttl;
        general_cache_object[`${cache_name}`].max_entries = max_entries;

    };



    /*
    get_cache_by_name property.
    function that recieves 1 parameter.
    cache_name: existing cache_name.
    */
    general_cache_object.get_cache_by_name = (cache_name)=>{
        return general_cache_object[`${cache_name}`];
    };
}



























InIt();



































