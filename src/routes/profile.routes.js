import {  Router } from "express";
import { 
    createProfile, 
    getProfileById,
    getAllProfiles,
    updateProfile, 
    deleteProfile 
} from "../controllers/profile.controller.js";

export const profileRoutes = Router();
 
profileRoutes.post("/profile", createProfile);
profileRoutes.get("/profile", getAllProfiles);
profileRoutes.get("/profile/:id", getProfileById);
profileRoutes.put("/profile/:id", updateProfile);
profileRoutes.delete("/profile/:id", deleteProfile); 