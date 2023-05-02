var Emd = require("../models/emd")

module.exports.list = () => {
    return Emd
    .find()
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })

}

module.exports.getEmd = id => {
    return Emd
    .findOne({_id:id})
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.getModalidades = id => {
    return Emd
    .distinct(modalidade)
    .then(dados=>{
        return dados
    })
    .catch(erro =>{
        return erro
    })
}

module.exports.addEmd = p => {
    return Emd
    .create(p)
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })

}

module.exports.updateEmd = p => {
    return Emd
    .updateOne({_id:p._id},p)
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })
}

module.exports.deleteEmd = id => {
    return Emd
    .deleteOne({_id:id})
        .then(dados=>{
            return dados
        })
        .catch(erro =>{
            return erro
        })
}