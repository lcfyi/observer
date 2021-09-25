# Observer

Just a simple HTTP server to dump logs on hard-to-observe systems.

For example, this method can be included in classes that require external observability.

```java

@SneakyThrows
private void observe(final String... message) {
    try (CloseableHttpClient client = HttpClients.createDefault()) {
        HttpPost httpPost = new HttpPost("{ENDPOINT}" + this.getClass().getSimpleName());
        httpPost.setHeader("Content-Type", "text/plain");
        BasicHttpEntity entity = new BasicHttpEntity();
        entity.setContent(
            new ByteArrayInputStream(String.join(" ", message).getBytes(StandardCharsets.UTF_8))
        );
        httpPost.setEntity(entity);
        client.execute(httpPost);
    }
}

```
