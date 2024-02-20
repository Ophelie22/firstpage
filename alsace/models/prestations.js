class Prestations{
    constructor(
        id,
        categoryIds,
        title,
        prix,
        description,
        adresse,
        accesibility,
        imageUrl,
        
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.prix = prix;
        this.description = description;
        this.adresse = adresse;
        this.accesibility = accesibility;   
        this.imageUrl = imageUrl;
        

    }
}
export default Prestations;