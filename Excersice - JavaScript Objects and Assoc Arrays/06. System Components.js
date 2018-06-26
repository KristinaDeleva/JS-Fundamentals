function systemComponents(arr) {
    let map = new Map();

    for(let line of arr) {
        let tokens = line.split(/\s*\|\s*/);
        let system = tokens[0];
        let component = tokens[1];
        let subcomponent = tokens[2];

        if(! map.has(system)){
            map.set(system, new Map());
        }
        if(! map.get(system).has(component)){
            map.get(system).set(component, [])
        }
        map.get(system).get(component).push(subcomponent);
    }

    let systemsSorted = Array.from(map.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(map.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            map.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }

    function sortSystems(s1, s2) {
        if(map.get(s1).size !== map.get(s2).size) {
            return map.get(s2).size - map.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return map.get(system).get(c2).length - map.get(system).get(c1).length;
    }
}
systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])