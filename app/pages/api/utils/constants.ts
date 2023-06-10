import idl from "../idl/solana_hello_world.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint = clusterApiUrl("devnet"); // | process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || ;
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed "Hello World" Program */
export const helloWorldprogramId = new PublicKey(
  "Ez63Afm7kn4EnocpHGwZ2PKHkLnhQdvGukJN5R2D1Ged"
);
export const helloWorldprogramInterface = JSON.parse(JSON.stringify(idl));
