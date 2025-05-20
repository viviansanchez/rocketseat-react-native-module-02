import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups } from "@screens/Groups";
import { Players } from "@screens/Players";
import { NewGroup } from "@screens/NewGroup";
import { useTheme } from "styled-components";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="groups" component={Groups} />
        <Screen name="new" component={NewGroup} />
        <Screen name="players" component={Players} />
      </Navigator>
    </View>
  );
}
