import { Text, View, Image, Pressable, StyleSheet, Platform } from "react-native";

function MealsItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
  function onPressHandler() {
    console.log(title);
  }

  return (
    <View style={styles.mealItem}>
      {/* Image Meal and title */}

      <Pressable android_ripple={{ color: "#ccc" }} style={({ pressed }) => (pressed ? styles.buttonPressed : null)} onPress={onPressHandler}>
        <View style={styles.mealContainerInner}>
          <View>
            <Image style={styles.imageMeal} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>

      {/* Ingredient */}
      {/* <View>
        {ingredients.map((ingredient) => (
          <Text>{ingredient}</Text>
        ))}
      </View> */}

      {/* Step to follow */}
      {/* <View>
        {steps.map((step) => (
          <Text>{step}</Text>
        ))}
      </View> */}
    </View>
  );
}

export default MealsItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  imageMeal: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
  mealContainerInner: {
    borderRadius: 8,
    overflow: "hidden",
  },

  buttonPressed: {
    opacity: 0.25,
  },

  // imageMealContainer: {
  //   flex: 1,
  //   width: 500,
  //   // height: 200,
  //   marginBottom: 24,
  // },

  // imageMealInner: {
  //   width: "100%",
  //   height: "100%",
  // },
});
