var general_cache_object = {"number_of_caches":0,
                            // setup all relevant functions and properties.
                            "inIt":()=>{          
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
        general_cache_object.number_of_caches += 1;
    };



    /*
    get_cache_by_name property.
    function that recieves 1 parameter.
    cache_name: existing cache_name.
    */
    general_cache_object.get_cache_by_name = (cache_name)=>{
        return general_cache_object[`${cache_name}`];
    };



    // TODO: write this function.
    general_cache_object.put_entry_if_absent = (cache_name, key, value)=>{

    };

    /*
    TODO: write documantation
    */
    general_cache_object.delete_cache = (cache_name)=>{
        let cache = general_cache_object.get_cache_by_name[`${cache_name}`];

        if(cache != null){
            delete general_cache_object[`${cache}`];
            number_of_caches-=1;
            return true;
        }
        return false;
            }
        }
    };




































