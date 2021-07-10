const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'CFG Team32',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}



/*
<form action="/campgrounds" method="POST" novalidate class="validated-form" enctype="multipart/form-data">
    <div class="mb-3">
        <label class="form-label" for="title">Title</label>
        <input class="form-control" type="text" id="title" name="campground[title]" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>

    <div class="mb-3">
        <div class="form-file custom-file">
            <input type="file" class="form-file-input" id="image" name="image" multiple>
            <label class="form-file-label" for="image">
            <span class="form-file-text custom-file-label">Choose image(s)...</span>
            <span class="form-file-button">Browse</span>
        </label>
        </div>
    </div>
    <div class="mb-3">
        <button class="btn btn-success">Add Campground</button>
    </div>
</form>

*/

// await cloudinary.uploader.destroy(filename) // will use this when deleting images.
