import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CommentCardProps = {
  comment: {
    name: string;
    body: string;
    email: string;
  };
};

export default function CommentCard({ comment }: CommentCardProps) {
  // Generate a color based on the commenter's name for avatar background
  function stringToColor(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View
          style={[
            styles.avatar,
            { backgroundColor: stringToColor(comment.email) },
          ]}
        >
          <Text style={styles.avatarText}>
            {comment.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{comment.name}</Text>
          <Text style={styles.email}>{comment.email}</Text>
        </View>
      </View>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222", // black/dark gray
  },
  email: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  body: {
    color: "#222", // black/dark gray
    lineHeight: 20,
    fontSize: 15,
    marginTop: 6,
  },
});
