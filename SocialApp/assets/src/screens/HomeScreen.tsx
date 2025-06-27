import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { fetchPosts } from "../services/api";
import PostCard from "../Components/PostCard";

const PURPLE = "#9B28F1";
const LIGHT_PURPLE = "#F6EEFF";
const BORDER = "#ece5f8";

function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setRefreshing(false);
    }
  };

  const userDisplayNames = useMemo(() => {
    const map = {};
    let count = 1;
    posts.forEach((post) => {
      if (post.user_id && !map[post.user_id]) {
        map[post.user_id] = `U${count++}`;
      }
    });
    return map;
  }, [posts]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{ marginTop: 10 }}>Loading posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.retry} onPress={loadPosts}>
          Tap to retry
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: LIGHT_PURPLE }}>
      <FlatList
        data={posts}
        renderItem={({ item }) =>
          item ? (
            <PostCard
              post={item}
              avatarLabel={item.user_id}
              onPress={() =>
                navigation.navigate("PostDetails", { postId: item.id })
              }
            />
          ) : null
        }
        keyExtractor={(item) => item?.id?.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[PURPLE]}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={{ color: PURPLE }}>No posts available.</Text>
          </View>
        }
        contentContainerStyle={{ padding: 16 }}
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
  retry: {
    color: "#007AFF",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  separator: {
    height: 14,
  },
});

export default HomeScreen;
