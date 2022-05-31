import config from '../../dbconfig.js';
import sql from 'mssql';

class PizzaService {

    getAll = async () => {

        let returnArray = null;

        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT * from Pizzas");
            returnArray = result.recordsets[0];
            return returnArray;
        } catch (error) {
            console.log(error);
        }

    }

    getById = async (id) => {

        let returnEntity = null;

        try {

            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query("SELECT * from Pizzas WHERE id = @pId");
            returnEntity = result.recordset;

            return returnEntity;

        } catch (error) {
            console.log(error);
        }
    }

    insert = async (pizza) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input("nombre", sql.VarChar, pizza.nombre)
                .input("libreGluten", sql.Bit, pizza.libreGluten)
                .input("importe", sql.Decimal(10, 2), pizza.importe)
                .input("descripcion", sql.VarChar, pizza.descripcion)
                .query("INSERT INTO Pizzas (nombre, libreGluten, importe, descripcion) VALUES (@nombre, @libreGluten, @importe, @descripcion)");
            return result.rowsAffected;
        }
        catch (error) {
            console.log(error);
        }

    }

    update = async (pizza) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input("id", sql.Int, pizza.id)
                .input("nombre", sql.VarChar, pizza.nombre)
                .input("libreGluten", sql.Bit, pizza.libreGluten)
                .input("importe", sql.Decimal(10, 2), pizza.importe)
                .input("descripcion", sql.VarChar, pizza.descripcion)
                .query("UPDATE Pizzas SET nombre = @nombre, libreGluten = @libreGluten, importe = @importe, descripcion = @descripcion WHERE id = @id");
            return result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
    }

    deleteById = async (id) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input("pId", sql.Int, id)
                .query("DELETE FROM Pizzas WHERE id = @pId");
            return result.rowsAffected;
        } catch (error) {
            console.log(error);
        }

    }

}

export default PizzaService;