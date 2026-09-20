/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines
*/

import express from "express";
import path from "path";
import session from "express-session";
import flash from "connect-flash";
import router from "./routes/index.js";
import fs from 'fs';
import hbs from "hbs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));

app.use(session({
  secret: "xianfire-secret-key",
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// Set-up Views & Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "xian");
app.engine("xian", hbs.__express);

// Register Partials (gamit ang synchronous reading para handa na bago mag-serve ng routes)
const partialsDir = path.join(__dirname, "views/partials");

if (fs.existsSync(partialsDir)) {
  const files = fs.readdirSync(partialsDir);
  files
    .filter(file => file.endsWith('.xian'))
    .forEach(file => {
      const partialName = file.replace('.xian', '');
      const fullPath = path.join(partialsDir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      
      hbs.registerPartial(partialName, content);
      console.log(`Registered partial: ${partialName}`);
    });
} else {
  console.error("❌ Partials directory does not exist:", partialsDir);
}

// Auto register din sa hbs partials directory para sa dynamic file resolving
hbs.registerPartials(partialsDir);

app.use("/", router);

export default app;

if (!process.env.ELECTRON) {
  app.listen(PORT, () => console.log(`🔥 XianFire running at http://localhost:${PORT}`));
}
