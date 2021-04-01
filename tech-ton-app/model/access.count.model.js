const countapi = require('countapi-js');

exports.incrementAccessCount = async (req, res) => {
    try {
        await countapi.hit('www.ton.com.br', 'test').then((result) => { 
          const accessCount = result.value 
          res.json({accessCount});  
        });  
    } catch (error) {
        res.status(400).json({ error: 'Could not increment access count' });
    }
}

exports.getAccessCount = async (req, res) => {
    try {
        await countapi.get('www.ton.com.br', 'test').then((result) => { 
          const accessCount = result.value  
          res.json({accessCount});  
        });
    } catch (error) {
        res.status(400).json({ error: 'Could not get access count' });  
    }
}