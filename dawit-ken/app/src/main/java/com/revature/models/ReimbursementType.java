package com.revature.models;

enum Type {
    lodging,
    travel,
    food,
    other
}
public class ReimbursementType {
    private int typeId;
    private Type type;

    public ReimbursementType(String type) {
        if(type.equalsIgnoreCase("lodging"))
            this.type = Type.lodging;
        else if (type.equalsIgnoreCase("travel"))
            this.type = Type.travel;
        else if (type.equalsIgnoreCase("food"))
            this.type = Type.food;
        else{
            this.type = Type.other;
        }
        this.typeId = typeId;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public Type getType() {
        return type;
    }

    public void setType(String type) {
        if(type.equalsIgnoreCase("lodging"))
            this.type = Type.lodging;
        else if (type.equalsIgnoreCase("travel"))
            this.type = Type.travel;
        else if (type.equalsIgnoreCase("food"))
            this.type = Type.food;
        else{
            this.type = Type.other;
        }
        this.typeId = typeId;
    }
}
