import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { fetchPostDetails, fetchComments } from "../services/api";
import CommentCard from "../Components/CommentCard";

const PURPLE = "#9B28F1";
const LIGHT_PURPLE = "#F6EEFF";

export default function PostDetailsScreen({ route }) {
  const { postId } = route.params;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const postData = await fetchPostDetails(postId);
        const commentsData = await fetchComments(postId);
        setPost(postData);
        setComments(commentsData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [postId]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={PURPLE} />
        <Text style={{ marginTop: 10 }}>Loading post...</Text>
      </View>
    );
  }

  if (error || !post) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error || "Post not found"}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: LIGHT_PURPLE }}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CommentCard comment={item} />}
        ListHeaderComponent={
          <View>
            <View style={styles.postContainer}>
              <View style={styles.header}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {String(post.user_id).slice(-2)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.username}>User {post.user_id}</Text>
                </View>
              </View>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.body}>{post.body}</Text>
            </View>
            <View style={styles.commentsSectionHeader}>
              <View style={styles.commentsDivider} />
              <Text style={styles.commentsCount}>
                Comments ({comments.length})
              </Text>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={{ color: "#888", marginTop: 10, marginLeft: 8 }}>
            No comments yet.
          </Text>
        }
        contentContainerStyle={{ padding: 0, paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#ece5f8",
    marginBottom: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: LIGHT_PURPLE,
    borderWidth: 2,
    borderColor: PURPLE,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: PURPLE,
    fontWeight: "bold",
    fontSize: 20,
  },
  username: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#222",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
    marginTop: 2,
  },
  body: {
    fontSize: 17,
    color: "#222",
    marginBottom: 18,
    lineHeight: 23,
  },
  commentsSectionHeader: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
  },
  commentsDivider: {
    height: 1,
    backgroundColor: "#ece5f8",
    marginBottom: 8,
    marginLeft: -18,
    marginRight: -18,
  },
  commentsCount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
});
