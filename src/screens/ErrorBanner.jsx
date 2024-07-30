import { Style } from "./Style";
import  {View, Text} from "react-native";

export const ErrorBanner = ({ message }) => {
  // generic error banner if there is an message show banner else return
    if (!message) {
      return null;
    }
    return (
      <View style={Style.errorBanner}>
        <Text style={Style.errorText}>{message}</Text>
      </View>
    );
  };
  