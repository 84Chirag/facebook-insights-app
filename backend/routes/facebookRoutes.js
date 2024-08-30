const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/facebook-login', async (req, res) => {
  const { accessToken, userId } = req.body;

  try {
    const response = await axios.get(`https://graph.facebook.com/v12.0/${userId}`, {
      params: {
        fields: 'id,name,picture',
        access_token: accessToken,
      },
    });
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
});

router.post('/page-insights', async (req, res) => {
  const { pageId, accessToken } = req.body;

  try {
    const response = await axios.get(`https://graph.facebook.com/v12.0/${pageId}/insights`, {
      params: {
        metric: 'page_fan_adds,page_engaged_users,page_impressions,page_reactions',
        access_token: accessToken,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching page insights', error });
  }
});

module.exports = router;
