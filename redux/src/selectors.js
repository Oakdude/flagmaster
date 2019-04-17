import {CONTINENT_FILTERS} from "./constants";



//held ég geti auðveldlega mappað inn í nýtt object hér ef ég vil

export default function (store) {
    // console.log("Got to selector");
    return store.guessTheFlag.score;
}

// export const getGameState = store => store.guessTheFlag.countries;

export const getScore = store => store.guessTheFlag.score;


export const getOptions = store => store.guessTheFlag;



//Here we clean up the data by the filter
export const getFilteredOptions = (store, regionFilter) => {
    let allOptions = getOptions(store);
    // console.log("VAR BEÐIN UM AÐ FILTERA");
    // console.log("ALLT: " + getOptions(store));
    // console.log("ALL options er: " + allOptions);
    // return allOptions;
    // return allOptions.filter(countries => countries.region === 'Europe');

    /*
    * Það sem ég get gert hér næst:
    * í staðinn fyrir að returna filteruðum country lista, skila honum sem
    * nýju obecti sem lítur út eins og þau sem ég gerði áður.
    * Senda það svo niður í Options og láta options sjá um að
    * birta 4 í einu og uppfæra score þegar það þarf og setja einn random
    * valkost sem réttan valkost
    * */
    //let filteredOptions = allOptions.filter(countries => countries.region === regionFilter);
    //skila þessum cleaned options
    //kannski þarf ekki countreis.flag
    // let cleanedOptions = {
    //     country: filteredOptions.countries.name,
    //     flag:filteredOptions.countries.flag,
    //     choice: 'incorrect'
    // };

    //console.log("FILTERING TESTING " + filteredOptions);


    //Ath þessi return statement virkar
    return allOptions.filter(countries => countries.region === regionFilter);


    // switch(regionFilter) {
    //     case CONTINENT_FILTERS.AFRICA:
    //         return allOptions.filter(countries => countries.region === 'Africa');
    //     case CONTINENT_FILTERS.AMERICAS:
    //         return allOptions.filter(countries => countries.region === 'Americas');
    //     case CONTINENT_FILTERS.EUROPE:
    //         console.log("ALLT: " + allOptions);
    //         return allOptions.filter(
    //             countries => countries === 'Europe'
    //             // function(option) {
    //             //     return option.region === 'Europe';
    //             // }
    //         );
    //
    //     case CONTINENT_FILTERS.ASIA:
    //         return allOptions.filter(countries => countries.region === 'Asia');
    //     case CONTINENT_FILTERS.OCEANIA:
    //         return allOptions.filter(countries => countries.region === 'Ocenia');
    //     default:
    //         return allOptions;
    // }
};

