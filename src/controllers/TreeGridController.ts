
export class TreeGridController {

    async GetList(req, res) {
        try {
            return res.status(200).send({ message: "OK" })
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" });
        }
    }
}