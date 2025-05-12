db.createUser({
  user: "sonu",
  pwd: "$2b$10$se9ZFsrUzNZ.fGv3HGvmj.GRy6hHq6ie86NCb4EnTj6Wc64FORHX2",
  roles: [
    { role: "readWrite", db: "Contact_Management_System" }
  ]
});