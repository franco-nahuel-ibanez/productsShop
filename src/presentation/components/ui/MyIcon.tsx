import { Icon, useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface Props {
  name: string;
  color?: string;
  white?: boolean;
}

const MyIcon = ({name, color, white = false}: Props) => {

  const theme = useTheme()

  if(white) {
    color = theme['color-info-100']
  } else if (!white) {
    color = theme['color-basic-color']
  } else {
    color = theme[color ?? 'text-basic-color']
  }

  return (
      <Icon
        style={styles.icon}
        fill={color}
        name={name}
      />
  
  )
}

export default MyIcon

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32
  }
})