const fetchPokemon = () => {
    const pokeSearch = document.getElementById("pokeSearch");
    let pokeInput = pokeSearch.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikachu.png")
        } else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        // mostrar la imagen del pokemon
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        // mostrar la habilidad del pokemon
        let pokeAby = data.abilities['0'].ability.name;
        pokeSkill(pokeAby);
        console.log(pokeAby);
        // mostrar nombre del pokemon
        let pokeName = data.species.name;
        pokeNames(pokeName);
        // mostrar el tipo de pokemon
        // let pokeT1 = data.types['0'].type.name;
        // pokeType(pokeT1);
        
        // let pokeT2 = data.types['1'].type.name;
        // pokeTypes(pokeT2);

        // Mostrar de los pokemon
        // HP pokemon
        let hp = data.stats['0'].base_stat;
        pokeHp(hp);
        // Ataque pokemon
        let atk = data.stats['1'].base_stat;
        pokeAtk(atk);
        // Defensa pokemon
        let def = data.stats['2'].base_stat;
        pokeDef(def);
        // Ataque especial
        let atk_sp = data.stats['3'].base_stat;
        pokeAtkSp(atk_sp);
        // Defensa especial
        let def_sp = data.stats['4'].base_stat;
        pokeDefSp(def_sp);
        // Velocidad pokemon
        let spd =data.stats['5'].base_stat;
        pokeSpd(spd);
    })
}

// fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}

const pokeSkill = (url) => {
    const pokeAby = document.getElementById('pokeAb');
    pokeAby.textContent = pokeAby.src = url;
    
}

const pokeNames = (url) => {
    const pokeName = document.getElementById('pokeName');
    pokeName.textContent = pokeName.src = url;
}

// const pokeType = (url) => {
//     const pokeT1 = document.getElementById('pokeType1');
//     pokeT1.textContent = pokeT1.src = url;
// }

// const pokeTypes = (url) => {
//     const pokeT2 = document.getElementById('pokeType2');
//     pokeT2.textContent = pokeT2.src = url;
// }

const pokeHp = (url) => {
    const hp = document.getElementById('hp');
    hp.textContent = hp.src = url;
}

const pokeAtk = (url) => {
    const atk = document.getElementById('attack');
    atk.textContent = atk.src = url;
}

const pokeDef = (url) => {
    const def = document.getElementById('defense');
    def.textContent = def.src = url;
}

const pokeAtkSp = (url) => {
    const atk_sp = document.getElementById('atk-sp');
    atk_sp.textContent = atk_sp.src = url;
}

const pokeDefSp = (url) => {
    const def_sp = document.getElementById('def-sp');
    def_sp.textContent = def_sp.src = url;
}

const pokeSpd = (url) => {
    const spd = document.getElementById('speed');
    spd.textContent = spd.src = url;
}