var SpriteUtility = function()
{

    this.m_Initialized = false;

    this.m_ScaleX = 1;
    this.m_ScaleY = 1;
    this.m_PosX = 0;
    this.m_posY = 0;

    this.Sprites = new SpriteSheet();

    this.init = function()
    {
        this.Sprites.m_Initialize();

        this.m_Initialized = true;
    }

// Sprite Sheet data
    this.SpriteSheet = function()
    {
        this.m_Initialized = false;
        this.m_SpritePath = "Resources/PonyOne.png";
        this.m_spritesheet = document.createElement("img");
        this.m_spritesheet.src = this.m_SpritePath; 
        this.m_TileWidth = 0;
        this.m_TileHeight = 0;
        this.m_Row = 0;
        this.m_Col = 0;

        this.SpriteFrames = new frame();

        this.m_Initialize = function(a_Filepath,a_Tilewidth,a_TileHeight,a_Rows,a_Columns)
        {
            this.m_SpritePath = a_Filepath;
            this.m_TileWidth = a_Tilewidth;
            this.m_TileHeight = a_TileHeight;
            this.m_Row = a_Rows;
            this.m_Col = a_Columns;
            this.SpriteFrames.createFrame(m_TileWidth,m_TileHeight,m_Row,m_Col);
            this.m_Initialized = true;

            
        }
    }


// SpriteRender.frame class
    this.Frame = function()
    {
        this.m_TileWidth = 0;
        this.m_TileHeight = 0;
        this.m_Row = 0;
        this.m_Col = 0;

        this.createFrame = function(a_Tilewidth,a_TileHeight,a_Rows,a_Cols)
        {

        }
    }

//SpriteRender.Anim class
    this.anim = function()
    {

        this.SetupAnim = function()
        {

        }
    }

    this.RenderSprite = function(DeltaTime,Frames)
    {
        if(!this.m_Initialized || !this.Sprites.m_Initialized)
        {
            console.log("Render Sprite function has encountered an error. Please check variables.");
            return;            

        }
           
        context.drawImage(Sprites.m_SpritePath,);

    }

};