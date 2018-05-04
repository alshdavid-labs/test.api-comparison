namespace Posts.Models {
    
    public class Post {
        public DateTime dateTime = DateTime.UtcNow.Date;
        public string content = '';

        constructor(content) {
            this.content = content;
        }
    }

}