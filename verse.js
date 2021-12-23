//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Lamentations 3:22-23', 
     'quote': 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.'
    },
    {'author': 'Proverbs 3:5-6', 
     'quote': 'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.'
    },
    {'author': 'Proverbs 18:10', 
     'quote': 'The name of the LORD is a strong tower; the righteous man runs into it and is safe.'
    },
    {'author': 'Psalm 16:8', 
     'quote': 'I have set the LORD always before me; because he is at my right hand, I shall not be shaken.'
    },
    {'author': 'Psalm 23:4', 
     'quote': 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.'
    },
    {'author': 'Psalm 31:24', 
     'quote': 'Be strong, and let your heart take courage, all you who wait for the LORD!'
    },
    {'author': 'Psalm 55:22', 
     'quote': 'Cast your burden on the LORD, and he will sustain you; he will never permit the righteous to be moved.'
    },
    {'author': 'Psalm 119:114-115', 
     'quote': 'You are my hiding place and my shield;I hope in your word. Depart from me, you evildoers, that I may keep the commandments of my God.'
    },
    {'author': 'Psalm 119:50', 
     'quote': 'This is my comfort in my affliction, that your promise gives me life.'
    },
    {'author': 'Psalm 120:1', 
     'quote': 'In my distress I called to the LORD, and he answered me.'
    },
    {'author': 'Isaiah 26:3', 
     'quote': 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'
    },
    {'author': 'Isaiah 40:31', 
     'quote': 'But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.'
    },
    {'author': 'Isaiah 41:10', 
     'quote': 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.'
    },
    {'author': 'Isaiah 43:2', 
     'quote': 'When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.'
    },
    {'author': 'Matthew 11:28', 
     'quote': 'Come to me, all who labor and are heavy laden, and I will give you rest.'
    },
    {'author': 'Mark 10:27', 
     'quote': 'Jesus looked at them and said, ‘With man it is impossible, but not with God. For all things are possible with God.'
    },
    {'author': 'John 16:33', 
     'quote': 'I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.'
    },
    {'author': '1 Thessalonians 5:11', 
     'quote': 'Therefore encourage one another and build one another up, just as you are doing.'
    },
    {'author': 'Philippians 4:19', 
     'quote': 'And my God will supply every need of yours according to his riches in glory in Christ Jesus.'
    },
    {'author': '1 Peter 5:7', 
     'quote': 'Casting all your anxieties on him, because he cares for you.'
    },
    {'author': '‍Deuteronomy 31:6', 
     'quote': 'Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.'
    },
    {'author': 'Joshua 1:7', 
     'quote': 'Only be strong and very courageous, being careful to do according to all the law that Moses my servant commanded you. Do not turn from it to the right hand or to the left, that you may have good success wherever you go.'
    },
    {'author': 'Nahum 1:7', 
     'quote': 'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.'
    },
    {'author': 'Psalm 27:4', 
     'quote': 'One thing have I asked of the LORD, that will I seek after: that I may dwell in the house of the LORD all the days of my life, to gaze upon the beauty of the LORD and to inquire in his temple.'
    },
    {'author': 'Psalm 34:8', 
     'quote': 'Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!'
    },
    {'author': 'Isaiah 26:3', 
     'quote': 'You keep him in perfect peace whose mind is stayed on you, because he trusts in you.'
    },
    {'author': 'Romans 8:28', 
     'quote': 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.'
    },
    {'author': 'Romans 8:31', 
     'quote': 'What then shall we say to these things? If God is for us, who can be against us?'
    },
    {'author': 'Romans 8:38-39', 
     'quote': 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.'
    },
    {'author': 'Romans 15:13', 
     'quote': 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.'
    },
    {'author': '1 Corinthians 13:12', 
     'quote': 'For now we see in a mirror dimly, but then face to face. Now I know in part; then I shall know fully, even as I have been fully known.'
    },
    {'author': '1 Corinthians 15:58', 
     'quote': 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.'
    },
    {'author': '1 Corinthians 16:13', 
     'quote': 'Be watchful, stand firm in the faith, act like men, be strong.'
    },
    {'author': '2 Corinthians 4:16-18', 
     'quote': 'So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.'
    },
    {'author': '1 Peter 2:11', 
     'quote': 'Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul.'
    },
    {'author': 'James 1:2-4', 
     'quote': 'Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.'
    },
    {'author': '1 John 3:22', 
     'quote': 'And whatever we ask we receive from him, because we keep his commandments and do what pleases him.'
    },
    {'author': '1 John 3:1-3', 
     'quote': 'See what kind of love the Father has given to us, that we should be called children of God; and so we are. The reason why the world does not know us is that it did not know him. Beloved, we are God’s children now, and what we will be has not yet appeared; but we know that when he appears we shall be like him, because we shall see him as he is. And everyone who thus hopes in him purifies himself as he is pure.'
    },

];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[random].author}`;
    
}