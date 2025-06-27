import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const PURPLE = "#9B28F1";
const LIGHT_PURPLE = "#F6EEFF";
const BORDER = "#ece5f8";

type PostCardProps = {
  post: any;
  onPress: () => void;
  avatarLabel: string;
};

export default function PostCard({
  post,
  avatarLabel,
  onPress,
}: PostCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      activeOpacity={0.92}
    >
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {String(post.user_id).slice(-2)}
          </Text>
        </View>
        <Text style={styles.username}>User {post.user_id}</Text>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>
        {post.body.length > 100
          ? post.body.substring(0, 100) + "..."
          : post.body}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#9B28F1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: BORDER,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: LIGHT_PURPLE,
    borderWidth: 2,
    borderColor: PURPLE,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: PURPLE,
    fontWeight: "bold",
    fontSize: 18,
  },
  username: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#222", // black/dark gray
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#222", // black/dark gray
  },
  content: {
    fontSize: 14,
    color: "#222", // black/dark gray
    lineHeight: 20,
  },
});
