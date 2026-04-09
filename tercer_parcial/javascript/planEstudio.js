const planICC = {
    "codigo": "IF01001",
    "carrera":"Ingenieria en Ciencias de la Computacion",
    "bloques": [
        {
            "bloque": "I",
            "asignaturas": [
                {
                    "codigo": "MT101",
                    "nombre": "Matematicas",
                    "creditos": 4,
                    "requisitos": []
                },
                {
                    "codigo": "ES101",
                    "nombre": "Español",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "IF112",
                    "nombre": "ICC",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "SC101",
                    "nombre": "Sociologia",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "FI101",
                    "nombre": "Filosofia",
                    "creditos": 3,
                    "requisitos": []
                }
            ],
            "bloque": "II", 
            "asignaturas": [
                {
                    "codigo": "MT",
                    "nombre": "Matematicas",
                    "creditos": 4,
                    "requisitos": []
                },
                {
                    "codigo": "ES101",
                    "nombre": "Español",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "IF112",
                    "nombre": "ICC",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "SC101",
                    "nombre": "Sociologia",
                    "creditos": 3,
                    "requisitos": []
                },
                {
                    "codigo": "FI101",
                    "nombre": "Filosofia",
                    "creditos": 3,
                    "requisitos": []
                }
            ]
        }
    ]

}; 
//objetos json = llave y un valor

document.addEventListener("DOMContentLoaded", ()=>{
    const flujoGrama = new FlujoGrama("planflujo",planICC);
    flujoGrama.GenerateUX();
});

class FlujoGrama {
    constructor(rootId, plan){
        this.plan = plan;
        this.root = document.getElementById(this.rootId);
        this.root.classList.add("plan");
    }
    GenerateUX(){
        this.createHeader();
        this.createBloques();
    }

    createHeader(){
        let header = document.createElement("H2");
        header.classList.add("plan_header");
        header.innerText = `${this.plan.codigo} - ${this.plan.carrera}`;
        this.root.appendChild(header);
    }
    createBloques(){

        this.plan.bloques.array.forEach((blq) => {
        
        let bloque = document.createElement("SECTION");
        bloque.classList.add("plan_bloque");
        let bloqueIndice = document.createElement("DIV");
        let bloqueAsignaturas = document.createElement("DIV");

        bloqueIndice.classList.add("plan_bloque_idx");
        bloqueAsignaturas.classList.add("plan_bloque_asig");

        bloqueIndice.innerText = blq.bloque;
            
        bloque.appendChild(bloqueIndice);
        bloque.appendChild(bloqueAsignaturas);
        this.root.appendChild(bloque);
        });
    }

    createAsignaturas(bloqueDOM,blqDef) {
        blqDef.asignaturas.forEach((asg)=>{
            let asignaturaDOM = document.createElement("DIV");
            asignaturaDOM.classList.add("plan_asignatura");
            
        })
    }
}