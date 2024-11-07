import { Component } from "@/Types";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";

const Navigation: Component = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
