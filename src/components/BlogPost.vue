<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <h2>{{post.title}}</h2>
            <p class="content-preview">{{post.blogHTML}}</p>
        </div>
        <div class="blog-photo">
            <img :src="require(`../assets/Blog/${post.blogCoverPhoto}.jpg`)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlogPost',
    props: ["post"]
}
</script>
<style lang="scss" scoped>
.blog-wrapper {
    display: flex;
    width: 300px;
    min-width: 650px;
    max-width: 650px;
    flex-direction: row;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media(max-width: 1200px) {
    .blog-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100%;
        max-width: 100%;
        flex-direction: column;
    }
    .blog-content{
        order: 1;
    }
    div .blog-content {
        padding: 0 24px;
    }
    div .blog-content h2 {
        font-size: 40px;
    }
    .blog-photo {
        order: 2;
    }
}
.blog-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
}

div .blog-content {
    max-width: 300px;
    padding: 72px;
}
div .blog-content h2{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 24px;
}
div .blog-content p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
}
.content-preview{
    font-size: 13px;
    max-height: 24px;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.blog-photo img{

    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>