import { Text, View, StyleSheet, FlatList } from "react-native";
import MealsItem from "../components/MealsItem";
import { MEALS } from "../data/Dummy_data";
// import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealsItem(itemData) {
    const item = itemData.item;
    // console.log(item);

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealsItem {...mealItemProps} />;
  }
  return (
    <View style={styles.rootScreen}>
      {/* <Text>Meals Overview screen - {catId}</Text> */}
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealsItem} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 16,
  },
});
