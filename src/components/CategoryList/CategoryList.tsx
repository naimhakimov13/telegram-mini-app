import { Cell, Divider, List } from '@telegram-apps/telegram-ui';

export type CategoryListProps = {
  categories: string[];
  onSelect: (value: string) => void;
};

export function CategoryList({ categories, onSelect }: CategoryListProps) {
  return (
    <List>
      <div
        style={{
          background: 'var(--tgui--bg_color)',
        }}
      >
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <div onClick={() => onSelect(category)} key={category}>
                <Cell>{category}</Cell>
                <Divider />
              </div>
            );
          })}
      </div>
    </List>
  );
}
