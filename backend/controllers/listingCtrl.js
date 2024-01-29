import Listing from "../models/listingModel.js"

export const createListingCtrl = async (req, res, next) => {
    try {
        const listing = await Listing.create({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            regularPrice: req.body.regularPrice,
            discountPrice: req.body.discountPrice,
            bathrooms: req.body.bathrooms,
            bedrooms: req.body.bedrooms,
            furnished: req.body.furnished,
            parking: req.body.parking,
            type: req.body.type,
            offer: req.body.offer,
            imageUrls: req.body.imageUrls,
            userRef: req.body.userRef,
        })
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
}