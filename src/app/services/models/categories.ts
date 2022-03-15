import { Category } from 'src/app/models/category';

/**
 * The structure of the data returned from the endpoint that
 * retrieves all categories.
 */
export interface ApiCategories {
  trivia_categories: Category[];
}
