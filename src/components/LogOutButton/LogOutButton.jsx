import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const LogOutButton = ({ onLogout }) => {
  return (
    <TouchableOpacity onPress={onLogout}>
      <Feather
        name="log-out"
        size={24}
        color="#BDBDBD"
        style={{ marginRight: 16 }}
      />
    </TouchableOpacity>
  );
};

export default LogOutButton;