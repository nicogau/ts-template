/*
  * conditional type  of an object
*/


// nos types de base:
interface Supplier {
  "@id": string
  id: number
  name: string
  description: string
  images: Array<string>
}


interface Category {
  "@id": string
  id: number
  name: string
  catParent: string
  description: string
}


// creation d' un type generique
type ApiType<T> = T


/* objet de test */ 
const cat: Category = {
  "@id": "/api/category/1",
  id: 1,
  name: 'guitare electrique',
  catParent: 'guitare',
  description: 'categorie guitare'
}

const supp: Supplier = {
  "@id": '/api/supplier/1',
  id: 3,
  name: 'fender store',
  description: 'la meilleure marque',
  images: ['img1', 'img2', 'img3']  
}
  

// 1ere exemple: fonctionne avec n' importe quel type   
// ici au choix avec <Category> ou <Supplier>
const showEntity = (obj: ApiType<Category>) => {

  // ici c' est OK typescript propose la completion
  console.log(obj.name)
  // ici typescript n' est pas content, la propriété 'images' n' est pas présente dans 'Category'
  // pas possible de compiler (ligne a commenter pour continuer)
   console.log(obj.images) 

}



// si tu veux faire du conditionnel au moment du runtime et non juste `a la compilation:
// avec les typeguards mais la doc à l'air déprécié :
// https://www.typescriptlang.org/docs/handbook/advanced-types.html

// pour bien comprendre le principe des types guards: 'narrowing' de la doc typescriptlang
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates



// Category type guards
// https://blog.theodo.com/2022/01/typescript-replace-as-typeguards/
const isSupplier = (element: unknown): element is Supplier =>
    Object.prototype.hasOwnProperty.call(element, "images")
    &&
    Object.prototype.hasOwnProperty.call(element, "id");

// test 
console.log(isSupplier(supp)) // -> true
console.log(isSupplier(cat)) //  -> false
// Supplier type guards

// avec la nouvelle doc:
//j'ai pas encore continué......


