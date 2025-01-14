import { db, voteCollection } from "@/models/name";
import { databases } from "@/models/server/config";
import { NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function POST(request: NextRequest){
    try {
        // grab the data 
        const {votedById, voteStatus, type, typeId} = await request.json()
        // list document 
        const response = await databases.listDocuments(db, voteCollection, [
            Query.equal('type', type),
            Query.equal('typeId', typeId),
            Query.equal('votedById', votedById)
        ])

        if(response.documents.length > 0){

        }
        // previous vote does not exist 
        // or that vote status was changed
        if(response.documents[0]?.voteStatus!==voteStatus){

        }

        const [upvotes, downvotes] = await Promise.all([
            databases.listDocuments(db, voteCollection, [
                Query.equal('type', type),
                Query.equal('typeId', typeId),
                Query.equal('voteStatus', 'upVoted'),
                Query.equal('votedById', votedById),
                Query.limit(1),
            ]), databases.listDocuments(db, voteCollection, [
                Query.equal('type', type),
                Query.equal('typeId', typeId),
                Query.equal('voteStatus', 'downVoted'),
                Query.equal('votedById', votedById),
                Query.limit(1),
            ]), 

        ])


    } catch (error: any) {
        return NextResponse.json(
            {
                error: error?.message || 'Error in voting'
            },
            {
                status: error?.status || error?.code || 500
            }
        )
    }
}