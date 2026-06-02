import { Category } from '@/types/category';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedCategory === null
            ? 'bg-amber-900 text-white'
            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-amber-900 text-white'
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
