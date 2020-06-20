# Теги
В базе данных имеется таблица с товарами goods (id INTEGER, name TEXT), таблица с тегами tags (id INTEGER, name TEXT) и таблица связки товаров и тегов tags_goods (tag_id INTEGER, goods_id INTEGER, UNIQUE (tag_id, goods_id)).
Выведите id и названия всех товаров, которые имеют все возможные теги в этой базе.

## Формат ввода
SQL-запрос.

## Решение 1
```sql
SELECT goods.id, goods.name FROM 
(SELECT goods_id, COUNT(goods_id) AS occurrence 
FROM tags_goods 
GROUP BY goods_id 
HAVING occurrence = (SELECT COUNT(id) AS rows_count FROM tags)) AS q
INNER JOIN goods on q.goods_id = goods.id
```

## Решение 2
```sql
SELECT g.*
FROM goods g
JOIN tags_goods tg ON g.id = tg.goods_id
GROUP BY g.id
HAVING COUNT() = (SELECT COUNT() FROM tags)
```
