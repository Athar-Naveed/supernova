import { type SchemaTypeDefinition } from 'sanity'
import { categories } from './categories'
import { watches } from './watches'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categories,watches],
}
