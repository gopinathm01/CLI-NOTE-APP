const fs =  require('fs');


// const notes = [
//     {
//     "name": "IEM earphones",
//     "price": 1900,
//   },
//   {
//     "name": "Tea Pot",
//     "price": 199,
//   }
// ] 


const loader = () =>{
    try{ 
           const dataBuffer = fs.readFileSync('notes.json'); 
    // console.log(dataBuffer); 
    const jsonData = JSON.parse(dataBuffer.toString());
    return jsonData;
    } catch (e){
        console.log(e.message);
        return [];
    }
 
}

// loader();

const saveNotes = (notes) => {
    try {
        fs.writeFileSync('./notes.json', JSON.stringify(notes));
        console.log('Notes saved successfully');
    } catch (e) {
        console.log('Error:', e.message);
    }
};

// saveNotes(notes); 


const addNotes = (name, price) => {
    const notes = loader();
    const checkProduct = notes.find(note => note.name === name);
    if (checkProduct) {
        console.log(`It's already present`);
    } else {
        const newNote = { name, price }; 
        notes.push(newNote);             
        saveNotes(notes);
        console.log('product added');
    }
};

// addNotes(notes);

const listNotes = () => {
    const productList = loader();
   
    let products = productList;
    if (Array.isArray(productList) && Array.isArray(productList[0])) {
        products = productList[0];
    }

    if (!Array.isArray(products) || products.length === 0) {
        console.log("No products found.");
        return;
    }

      products.forEach((product, i) => {
        console.log(`${i + 1} PRODUCT : ${product.name} - RS :${product.price}`);
    });
};
// listNotes();

const removeNotes = (productName) =>{
    const productNames = loader();
    const filterProducts = productNames.filter((names)=>{
        names.productName !== productName;
    })

    if(filterProducts.length === productNames.length){
        console.log('product not found');
    }
    else {
        saveNotes(filterProducts);
        console.log(`product ${productName} removed successfully`);
    }
} 

// removeNotes('IEM earphones');


module.exports = {
    addNotes,
    listNotes,
    removeNotes
}