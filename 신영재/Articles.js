function Articles({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art) => (
            <tr data-testid="article" key={`article-index-${art.title}`}>
              <td data-testid="article-title">{art.title}</td>
              <td data-testid="article-upvotes">{art.upvotes}</td>
              <td data-testid="article-date">{art.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
