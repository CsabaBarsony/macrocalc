# SQL

## Queries

### Macros by food

```sql
select enabled_food.name, enabled_food.description, GROUP_CONCAT(nutrient.value order by nutrient.value) as macros
from nutrient
join enabled_food
on nutrient.food_id = enabled_food.food_id
where nutrient.nutrient_id = 203
or nutrient.nutrient_id = 204
or nutrient.nutrient_id = 205
group by nutrient.food_id
```

### Macros by food with portion data

```
select enabled_food.name, enabled_food.description, GROUP_CONCAT(nutrient.value order by nutrient.value) as macros, weight.amount, weight.description, weight.gram
from nutrient
join enabled_food
on nutrient.food_id = enabled_food.food_id
join weight
on weight.food_id = enabled_food.food_id
where nutrient.nutrient_id = 203
or nutrient.nutrient_id = 204
or nutrient.nutrient_id = 205
group by nutrient.food_id
```

### Simple query of macros of enabled foods

```
select food.id, enabled_food.name, nutrient.value
from food
join enabled_food
on food.id = enabled_food.food_id
join nutrient
on food.id = nutrient.food_id
where nutrient.nutrient_id = 203
or nutrient.nutrient_id = 204
or nutrient.nutrient_id = 205
```