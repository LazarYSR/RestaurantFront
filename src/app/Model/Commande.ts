
export interface Commande
{
id: number,
  categorie: string,
  prix: number,
  jours: number,
  quantite: number,
  dateCommande: Date, 
  total: number,
  employeId: number,
  platId: number
}