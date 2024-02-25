"use server";
import { connectToDB } from "../mongoose";
import Tarjet from "../models/Tarjet";
import { NextResponse } from "next/server";


export async function findAllBooks() {

    try {
        connectToDB()
        const books = await Tarjet.find()
        return books
    } catch (error) {
        console.log(error.message);
    }
}

export async function findbyCategorie({value}) {
    try {
        connectToDB()
        const books = await Tarjet.find({
            tags:value
        })
        console.log(books)
        return books
    } catch (error) {
        console.log(error.message);
    }
}

export async function findbySubject({value}) {
    try {
        connectToDB()
        const books = await Tarjet.find({
            selectedClothing:value
        })
        return books
    } catch (error) {
        console.log(error.message);
    }
}

export async function findPaperPdf({value}) {
    try {
        connectToDB()
        const books = await Tarjet.findById(value)
        return books
    } catch (error) {
        console.log(error.message);
    }
}